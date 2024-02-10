function getSandwichFilling(sandwich) {
    const fillings = []
      for(let i = 1; i < sandwich.length - 1; i++){
        fillings.push(sandwich[i]);
      }
    
    return fillings
    }
