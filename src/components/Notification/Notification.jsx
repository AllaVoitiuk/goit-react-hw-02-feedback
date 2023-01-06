import css from './Notification.module.css'
export const Notification =  ({message})=> {
  
  return (
    <>
    <h3 className={css.message}>{message}</h3>
    </>
  )
 
};
