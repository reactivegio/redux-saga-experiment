
export async function getTodos(test="test") {
    /* api url
    const res = await fetch(`${url}/?id=0`);
    const data = await res.json();
    if (res.status >= 400) {
      throw new Error(data.errors);
    }*/
    try{
        console.log(test);
        return [{
            id: 1,
            title: "clean the bathroom",
            isCompleted : false
        }];
    }
    catch(error){
        throw new Error("Error occurs");
    }
  }