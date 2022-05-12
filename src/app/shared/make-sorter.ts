/**
 * Makes a function for use in sorting arrays of object by a property
 * @param key : string. Property to compare.
 * @returns a sorter function
 */

export function makeSorter(key: string) {
  return (objA: any, objB: any) => {
    if (objA[key] === objB[key]) {
      return 0;
    }
    return objA[key] > objB[key] ? 1 : -1;
  };
}
