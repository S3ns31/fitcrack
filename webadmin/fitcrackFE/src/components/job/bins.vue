<template>
  <div>
    <v-subheader>
      <b class="mr-1">JOB BINS</b>
      <v-progress-circular
        v-show="loading"
        size="11"
        width="2"
        indeterminate
      />
      <v-spacer />
      <v-btn
        v-if="!adding"
        ref="addBtn"
        key="addBtn"
        small
        text
        @click="addBin"
      >
        New
        <v-icon right>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-btn
        v-else
        key="cancelBtn"
        small
        text
        :disabled="loading"
        @click="adding = false"
      >
        Cancel
        <v-icon right>
          mdi-close
        </v-icon>
      </v-btn>
    </v-subheader>

    <v-list-item
      v-show="adding"
    >
      <v-list-item-action>
        <v-icon>mdi-folder-plus</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-text-field
          ref="addBinInput"
          v-model="newBinName"
          hide-details
          dense
          label="Bin Name"
          placeholder="New Bin"
          @keydown="addBinKeyHandler"
        />
      </v-list-item-content>
      <v-list-item-action>
        <v-btn 
          icon
          :disabled="loading"
          @click="createBin"
        >
          <v-icon color="primary">
            mdi-check
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>

    <!-- Bin listing -->

    <draggable
      v-model="bins"
      handle=".drag-handle"
      :animation="150"
      :disabled="loading || canAssign"
      @change="updateBins"
    >
      <v-list-item 
        v-for="({ id, name }, index) in bins"
        :key="id"
        :to="canAssign ? null : {name: 'bins', params: { id }}"
        exact
      >
        <v-list-item-action 
          v-if="canAssign"
          class="my-1 mr-7 attention"
          :style="{animationDelay: `${index*250/bins.length}ms`}"
        >
          <v-tooltip 
            v-if="parseInt($route.params['id']) == id"
            right
            color="error"
          >
            <template #activator="{ on }">
              <v-btn
                icon
                small
                color="error"
                v-on="on"
                @click="removeSelectedFrom(id)"
              >
                <v-icon>
                  mdi-minus
                </v-icon>
              </v-btn>
            </template>
            <span>Remove from {{ name }}</span>
          </v-tooltip>
          <v-tooltip 
            v-else
            right
            color="success"
          >
            <template #activator="{ on }">
              <v-btn
                icon
                small
                color="success"
                v-on="on"
                @click="addSelectedTo(id)"
              >
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </template>
            <span>Add to {{ name }}</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-action
          v-else
          class="drag-handle my-1 reveal"
        >
          <v-icon>mdi-drag</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </draggable>
  </div>
</template>

<script>
import {mapTwoWayState} from 'spyfu-vuex-helpers'
import {twoWayMap} from '@/store'
import {mapState} from 'vuex'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      loading: true,
      adding: false,
      newBinName: ''
    }
  },
  computed: {
    ...mapTwoWayState('binInterface', twoWayMap(['bins'])),
    ...mapState('binInterface', ['selectedJobs']),
    canAssign () {
      return this.selectedJobs.length > 0 && this.$route.params['id'] !== 'trash'
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      this.loading = true
      await new Promise(resolve => setTimeout(resolve, 3000))
      this.loading = false
    },
    addBin () {
      this.adding = true
      this.$nextTick(() => this.$refs.addBinInput.focus())
    },
    async createBin () {
      if (this.newBinName === '' || this.loading) return
      this.loading = true
      // await API call
      await this.load()
      this.newBinName = ''
      this.adding = false
      setTimeout(() => this.$refs.addBtn.$el.focus(), 25)
    },
    async updateBins ({ moved: { newIndex, element: { id } } }) {
      this.loading = true
      // await API call
      this.load()
    },
    addBinKeyHandler ({ keyCode }) {
      switch (keyCode) {
        case 13:
          this.createBin()
          break
        case 27:
          this.adding = false
          break
      }
    },
    addSelectedTo (binId) {
      console.log(binId)
    }
  }
}
</script>

<style scoped>
  .drag-handle {
    cursor: grab;
  }
  .drag-handle:active {
    cursor: grabbing;
  }

  .attention {
    opacity: 0;
    animation: pop .5s forwards;
  }
  @keyframes pop {
    50% {
      transform: scale(1.4)
    }
    to {
      opacity: 1
    }
  }

  .reveal {
    animation: fade-in .7s;
  }
  @keyframes fade-in {
    from {
      opacity: 0
    }
  }
</style>