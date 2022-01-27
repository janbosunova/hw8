import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
	return <div onClick={props.onConfirm} className={classes.backdrop} />
}
const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				{props.children}
				<Button onClick={props.onConfirm}>ok</Button>
			</footer>
		</Card>
	)
}

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop -root'),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
                    message = {props.message}
					onConfirm={props.onConfirm}
                    children =  {props.children}
				/>,
                document.getElementById('modal-root')
			)}
		</>
	)
}
export default ErrorModal
