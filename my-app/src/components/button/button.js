import '../button/button.css';

export default ({children, onClick}) => {
    return (
        <button class = 'button'> onClick={onClick}>{children} </button>
    )
}