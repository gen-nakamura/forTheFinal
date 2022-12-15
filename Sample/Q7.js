// function waitAll(promiseList){
//     if (promiseList.length === 0) return Promise.resolve(promiseList);
//     var done;
//     promiseList.forEach((item, index, array)=>{
//       item.then((value)=>{
//         console.log(`resolved index=${index}, and value=${value}`);
//         done = index;
//       }).catch((value)=>{
//         console.log(`rejected index=${index}, and value=${value}`);
//         done = index;
//   }); });
//     return Promise.race(promiseList)
//       .then((result)=>{
//         console.log(`resolved and do waitAll again, index=${done}, and value=${result}`);
//         promiseList.splice(done, 1);
//         return waitAll (promiseList);
//       }).catch((error)=>{
//         console.log(`rejected and do waitAll again, index=${done}, and value=${error}`);
//         promiseList.splice(done, 1);
//         return waitAll (promiseList);
//       });
//   }
function waitAll(promiseList){
    if (promiseList.length === 0) return
  Promise.resolve(promiseList);
    var done;
    promiseList.forEach((item, index, array)=>{
      item.then(()=>{
        done = index;
      }).catch(()=>{
        done = index;
  }); });
    return Promise.race(promiseList)
      .then((result)=>{
        promiseList.splice(done, 1);
        return waitAll (promiseList);
      }).catch((error)=>{
        promiseList.splice(done, 1);
        return waitAll (promiseList);
      });
  }
  