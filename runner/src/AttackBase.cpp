/*
* Author : see AUTHORS
* Licence: MIT, see LICENSE
*/

#include "AttackBase.hpp"

/* Private */

bool AttackBase::findAndAdd(const std::string& key, const std::string& argument, const char *override_arg_value) {
  std::string value;

  if (config_.find(key, value)) {
    addArgument(argument);
    if (override_arg_value) {
      addArgument(override_arg_value);
    } else {
      addArgument(value);
    }
    return true;
  }
  return false;
}

bool AttackBase::findAndAdd(const std::string& key) {
  std::string value;

  if (config_.find(key, value)) {
    addArgument(value);
    return true;
  }
  return false;
}

void AttackBase::initializeArguments() {

  /** Name of the executable is set by class Process */
  findAndAddRequired("hash_type", "-m");

  addArgument("--optimized-kernel-enable");
  addArgument("--machine-readable");
  //    addArgument("--force");
}

/* Protected */

void AttackBase::addArgument(std::string argument){
  std::string *new_argument = new std::string(argument);
  arguments_.push_back(TOCSTRING(new_argument->c_str()));
  Logging::debugPrint(Logging::Detail::ObjectManipulation, "Adding argument '" + *new_argument + "'");
}

void AttackBase::findAndAddOptional(const std::string& key) {
  findAndAdd(key);
}

void AttackBase::findAndAddOptional(const std::string& key, const std::string& argument) {
  findAndAdd(key, argument);
}

void AttackBase::findAndAddRequired(const std::string& key) {
  if (!findAndAdd(key))
  RunnerUtils::runtimeException(key + "is missing in config");
}

void AttackBase::findAndAddRequired(const std::string& key, const std::string& argument, const char *override_arg_value) {
  if (!findAndAdd(key, argument, override_arg_value))
  RunnerUtils::runtimeException(key + "is missing in config");
}

/* Public */

AttackBase::AttackBase(const ConfigTask& config) : output_file_(HashcatConstant::OutputFile), config_(config), success_exit_code_(HashcatConstant::Succeded) {
  initializeArguments();
}

AttackBase::~AttackBase() {
  // Nothing
}
std::vector<char*>& AttackBase::getArguments() {
  return arguments_;
}

size_t AttackBase::getArgumentsSize() {
  return arguments_.size();
}

unsigned long long AttackBase::getSuccessExitCode() {
  return success_exit_code_;
}
