import './Button.css';

  function Button({ children, onClick, color = "blue", className = '' }) { 
    const classNames = `Button ${color} ${className}`;  // 클래스명 추가할 때 빈공백이 필요함
    return (
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default Button;
  