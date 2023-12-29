function Button({ 
    children, 
    className, 
    disabled=false,
    href="",
    onClick, 
    type="button",
    visual="button",
}) 

{ 
    let buttonClass = "button";
    if (visual === "link") { 
      buttonClass = "button-link";
    }

    return (
      <button 
        className={`${buttonClass} ${className}`}
        disabled={disabled} href={href} type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Button;