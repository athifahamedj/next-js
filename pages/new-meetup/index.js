import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetup(){
const onAddHandler =(props)=>{
  console.log(props);
}
  return <NewMeetupForm onAddMeetup={onAddHandler}  />
}

export default NewMeetup;