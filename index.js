const isString = (val) => !!(typeof val === "string");
const isNotEmpty = (val) => !!(val && val.trim().length > 0);
const toUpperCase = (val) => val && typeof val === "string" ? val.toUpperCase() : val;
const stringhelper = { isString, isNotEmpty, toUpperCase};
module.exports =  stringhelper;