console.log("chart-.jsを読み込みました。")



const data2 = {
    labels: [
      '推し好きしんどい',
      '腹減った',
      '勉強しなきゃ…',
      
    ],
    datasets: [{
        label: '一日の脳内',
        data: [60,35,5],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',


        ],
        hoverOffset: 4
      }]
    };

  const config2 = {
    type: 'doughnut',
    data: data2,
  };

  const ctx2=document.getElementById("myChart2");
  const myChart2=new Chart(
    ctx2,
    // $("myChart2"),
    config2,
  )