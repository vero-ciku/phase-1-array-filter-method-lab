// Code your solution here
function findMatching (name, str){
    const filtered = name.filter( name => name.toLowerCase() === str.toLowerCase());
   return filtered;
}
function fuzzyMatch (driver, str) {
    const filtered = driver.filter( name => name.toLowerCase().indexOf(str.toLowerCase()) === 0);
    return filtered;
}
function matchName (driver, str) {
    const filtered = driver.filter(name => name['name'].toLowerCase() === str.toLowerCase() );
    return filtered
}