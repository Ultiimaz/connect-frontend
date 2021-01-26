export const latest = (data, amount = 50) => {
    if(!Array.isArray(data)){
      console.error("Helpers.js/3: data is not of type Array");
      return []; // because code always expects array
    }
    if(data.length === 0){
      console.error('Helpers.js/7: data is empty');
      return [];
    }
    if(data.length < amount) {
      // then just return less than asked
      return data;
    }

    let newData = [];
    let offset = data.length - amount;

    return data.slice(offset,data.length);
}
