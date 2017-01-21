module.exports = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"childProducts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"consume","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DATABASE_CONTRACT","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"otherProducts","type":"address[]"},{"name":"newProductName","type":"bytes32"},{"name":"lon","type":"uint256"},{"name":"lat","type":"uint256"}],"name":"merge","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"PRODUCT_FACTORY","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isConsumed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"actions","outputs":[{"name":"handler","type":"address"},{"name":"description","type":"bytes32"},{"name":"lon","type":"uint256"},{"name":"lat","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"parentProducts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"description","type":"bytes32"},{"name":"lon","type":"uint256"},{"name":"lat","type":"uint256"},{"name":"newProductsNames","type":"bytes32[]"},{"name":"_consumed","type":"bool"}],"name":"addAction","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_parentProducts","type":"address[]"},{"name":"_lon","type":"uint256"},{"name":"_lat","type":"uint256"},{"name":"db","type":"address"},{"name":"productFactory","type":"address"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"}]