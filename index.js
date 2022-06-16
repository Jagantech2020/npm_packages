const isString = (val) => !!(typeof val === "string");
const isNotEmpty = (val) => !!(val && val.trim().length > 0);
const stringhelper = { isString, isNotEmpty };
module.exports =  stringhelper;