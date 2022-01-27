import { useState } from 'react'
import Wrapper from '../Helpers'
import Button from '../Ui/Button'
import Card from '../Ui/Card'
import ErrorModal from '../Ui/ErrorModal'
import classes from './UserList.module.css'

const UserList = (props) => {
	const [del, setDel] = useState(false)
    const [data,setData] = useState([])
    
	const DelHandler = (event)=>{
      setData(props.users.filter(user=>user.id !== event.target.id))
      setDel(true)
    }
    const errorHandler = ()=>{
        props.onGetData(data)
        setDel(null)
    }
    const cancelHandler =() =>{
        setDel(null)
    }
	return (
	<Wrapper>
        {del && (
        <ErrorModal title ="Invalid input "
        message = 'Are you sure?'
        onConfirm = {errorHandler}

      
  
        
        >
            <Button onClick = {cancelHandler}>cancel</Button>
        </ErrorModal>)
        }
        	<Card className={classes.users}>
			<ul>
				{props.users.map((user) => {
					return (
						<li key={user.id}>
							{user.name} ({user.age} years old)
							<Button id = {user.id} onClick={DelHandler}>delete</Button>
						</li>
					)
				})}
			</ul>
		</Card>
    </Wrapper>
	)
}
export default UserList
