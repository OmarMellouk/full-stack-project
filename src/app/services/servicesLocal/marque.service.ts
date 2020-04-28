export class MarqueService{
  
    marques=[
      {
          id:1,
        text1:'omar1111',
       mrqs:[
         {
           id:1,
           mrq:'../../assets/imgs/APPLE.jpg',
           modeles:[
             {
               id:1,
              
               tel:'../../assets/imgs/iph1.png'
             },
             {
               id:2,
               
                tel:'../../assets/imgs/iph2.jpg'
             },
             {
               id:3,
              
               tel:'../../assets/imgs/iph3.png'
             },
             {
              id:4,
             
              tel:'../../assets/imgs/iph4.png'
            }
             ]
          
          },
          {
            id:2,
            mrq:'../../assets/imgs/WIKO.jpg',
            modeles:[
              {
                id:1,
              
                tel:'../../assets/imgs/iph3.png'
              },
              {
                id:2,
               
                 tel:'../../assets/imgs/iph5.png'
              },
              {
                id:3,
              
                tel:'../../assets/imgs/iph6.png'
              },
              {
                id:4,
              
                tel:'../../assets/imgs/iph4.png'
              }
            ]
           
           },
           {
            id:3,
            mrq:'../../assets/imgs/ALCATEL.jpg',
            modeles:[
              {
                id:1,
               
                tel:'../../assets/imgs/iph2.jpg'
              },
              {
                id:2,
                
                 tel:'../../assets/imgs/iph7.png'
              },
              {
                id:3,
             
                tel:'../../assets/imgs/iph8.png'
              },
              {
                id:4,
             
                tel:'../../assets/imgs/iph1.png'
              }
            ]
           
           },
           {
            id:4,
            mrq:'../../assets/imgs/SAMSUNG.jpg',
            modeles:[
              {
                id:1,
              
                tel:'../../assets/imgs/iph7.png'
              },
              {
                id:2,
               
                 tel:'../../assets/imgs/iph6.png'
              },
              {
                id:3,
             
                tel:'../../assets/imgs/iph5.png'
              },
              {
                id:4,
             
                tel:'../../assets/imgs/iph4.png'
              }
            ]
           
           }]
          
      
       
      },
      {
          id:2,
        text1:'omar222222',
        mrqs:[
          {
            id:1,
            mrq:'../../assets/imgs/SONY.jpg',
            modeles:[
              {
                id:1,
              
                tel:'../../assets/imgs/tab1.png'
              },
              {
                id:2,
               
                 tel:'../../assets/imgs/tab2.png'
              },
              {
                id:3,
              
                tel:'../../assets/imgs/tab3.png'
              },
              {
                id:4,
              
                tel:'../../assets/imgs/tab4.png'
              }
            ]
           
           },
           {
            id:2,
             mrq:'../../assets/imgs/SAMSUNG.jpg',
             modeles:[
              {
                id:1,
               
                tel:'../../assets/imgs/tab3.png'
              },
              {
                id:2,
              
                 tel:'../../assets/imgs/tab5.png'
              },
              {
                id:3,
             
                tel:'../../assets/imgs/tab6.png'
              },
              {
                id:4,
              
                tel:'../../assets/imgs/tab4.png'
              }
             ]
            
            },
            {
              id:3,
              mrq:'../../assets/imgs/ALCATEL.jpg',
              modeles:[
                {
                  id:1,
                
                  tel:'../../assets/imgs/tab5.png'
                },
                {
                  id:2,
               
                   tel:'../../assets/imgs/tab6.png'
                },
                {
                  id:3,
                
                  tel:'../../assets/imgs/tab7.png'
                },
                {
                  id:4,
                
                  tel:'../../assets/imgs/tab8.png'
                }
              ]
             
             },
             {
              id:4,
              mrq:'../../assets/imgs/MEIZU.jpg',
              modeles:[
                {
                  id:1,
                
                  tel:'../../assets/imgs/tab3.png'
                },
                {
                  id:2,
                 
                   tel:'../../assets/imgs/tab4.png'
                },
                {
                  id:3,
                 
                  tel:'../../assets/imgs/tab5.png'
                },
                {
                  id:4,
                
                  tel:'../../assets/imgs/tab1.png'
                }
              ]
             
             }]
      }]

      getmarquebyId(id:number)
      {
          const marqueg = this.marques.find((t)=>{return t.id===id});
          return marqueg;
      }
      getmodelebyId(id1:number,id2:number)
      {
      
        const marquess = (this.marques.find((t)=>{return t.id===id1})).mrqs.find((t)=>{return t.id===id2});
        return marquess;
      }

      gettelbyId(id1:number,id2:number,id3:number)
      {
      
        const tel = (this.marques.find((t)=>{
          return t.id===id1})).mrqs.find((t)=>{
            return t.id===id2}).modeles.find((t)=>{
              return t.id===id3});
        return tel;
      }
      
}