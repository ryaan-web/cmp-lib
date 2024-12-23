import cuid from "cuid";

const getUniqueId = (prefix = "lush") => prefix.toLowerCase() + "_" + cuid();

export default getUniqueId;
