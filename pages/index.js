import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const dummyDatas = [{
  id:'m1',
  title:'An iphone',
  image:'https://images.indianexpress.com/2021/10/Apple_iPhone13_LEAD.jpg',
  address:'california 100392, United states of america',
  description:'The product of steve jobs'
},
{
  id:'m2',
  title:'An iphone',
  image:'https://images.indianexpress.com/2021/10/Apple_iPhone13_LEAD.jpg',
  address:'california 100392, United states of america',
  description:'The product of steve jobs'
}]; 

const HomePage =()=>{  
  return <Layout><MeetupList meetups={dummyDatas}/></Layout>

}

export default HomePage;