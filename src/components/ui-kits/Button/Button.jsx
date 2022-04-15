import './styles.css';

const Button = ({text, ...buttonProps}) => {
  return <button className='btn' {...buttonProps}>{text}</button>;
}

export default Button;