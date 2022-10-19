import MeetupList from "../../components/meetups/MeetupList";
const newMeetupPage =()=>{  

  const dummyDatas = () =>[{
    id:'m1',
    image:'https://ijunkie.com/wp-content/uploads/2021/04/iPhone-12-pro.jpg',
    title:'An iphone',
    address:'california 100392, United states of america',
    description:'The product of steve jobs'
  },
  {
    id:'m2',
    image:'https://ijunkie.com/wp-content/uploads/2021/04/iPhone-12-pro.jpg',
    title:'An iphone',
    address:'california 100392, United states of america',
    description:'The product of steve jobs'
  }]

  return <MeetupList meetupData={dummyDatas}/>

}

export default newMeetupPage;