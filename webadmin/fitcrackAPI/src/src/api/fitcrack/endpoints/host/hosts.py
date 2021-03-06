'''
   * Author : see AUTHORS
   * Licence: MIT, see LICENSE
'''

import logging

from flask import request
from flask_restplus import Resource

from src.api.apiConfig import api
from src.api.fitcrack.endpoints.host.argumentsParser import jobHost_parser
from src.api.fitcrack.endpoints.host.responseModels import page_of_hosts_model, boincHostDetail_model
from src.database import db
from src.database.models import Host, FcHostActivity, FcHostStatus

log = logging.getLogger(__name__)
ns = api.namespace('hosts', description='Operations with hosts.')




@ns.route('')
class hostsCollection(Resource):

    @api.expect(jobHost_parser)
    @api.marshal_with(page_of_hosts_model)
    def get(self):
        """
        Returns list of hosts.
        """

        args = jobHost_parser.parse_args(request)
        page = args.get('page', None)
        per_page = args.get('per_page', None)

        hosts_page = Host.query

        if args.showDeleted:
            hosts_page = hosts_page.filter(Host.deleted == 1)
        else:
            hosts_page = hosts_page.filter(Host.deleted == None)


        if args.name:
            hosts_page = hosts_page.filter(Host.domain_name.like('%' + args.name + '%'))

        if args.order_by:
            orderBy = getattr(Host, args.order_by)
            if args.descending:
                orderBy = orderBy.desc()
                hosts_page = hosts_page.order_by(orderBy)

        else:
            hosts_page = hosts_page.order_by(Host.id.desc())

        if args.all:
            return {
                'items': hosts_page.all()
            }
        else:
            return hosts_page.paginate(page, per_page, error_out=True)


@ns.route('/<int:id>')
@api.response(404, 'Host not found.')
class HostByID(Resource):

    @api.marshal_with(boincHostDetail_model)
    def get(self, id):
        """
        Returns exact host.
        """

        host = Host.query.filter(Host.id == id).one()
        return host


    def delete(self, id):
        """
        Hides or shows a host from the list
        """
        hostStatus = FcHostStatus.query.filter(FcHostStatus.boinc_host_id == id).one()
        hostStatus.deleted = not hostStatus.deleted
        db.session.commit()
        return 'Host visibility toggled', 200



@ns.route('/info')
class hostsInfo(Resource):

    #@api.marshal_with(host_info_model)
    def get(self):
        """
        Returns information about hosts.
        """

        totalHosts = Host.query.count()
        activeHosts = 0
        for hostStatus in FcHostStatus.query.all():
            if hostStatus.online:
                activeHosts +=1
        inactiveHosts = totalHosts - activeHosts
        return {
            'totalHosts': totalHosts,
            'activeHosts': activeHosts,
            'inactiveHosts': inactiveHosts
        }
