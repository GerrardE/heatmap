const dateList = (transactions) => {
  let dateArray = [];
  
  transactions && transactions.forEach(transaction => {
    dateArray.push(transaction.date);
  })
  
  let newDateArray = [...new Set(dateArray)];
  
  let date_list = []
  
  newDateArray.forEach(date=>{
    let transact = transactions && transactions.filter(detail => date === detail.date);
  
    let date_object={date: '', profit: 0};
    let profit=0;
  
    transact.forEach(transacted => {
      if (transacted.transactionType === 'debit'){
        profit -= transacted.amount;
      } else {
        profit += transacted.amount;
      }

      date_object.date = date;
      date_object.profit = profit;
      date_list.push(date_object);
    })
  })
  
  let new_date_list = [...new Set(date_list)];

  new_date_list.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  });
  
  return new_date_list;
}

export default dateList;
