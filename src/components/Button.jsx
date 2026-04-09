function Button(props) {
    console.log(props)
    const { children, ...rest } = props;

    return (
        <button {...rest}>{children}</button>
    );
}

export default Button;

// props.children = "Add"

// props.classNmae = "todo__item todo__button--add"
// props.type = "submit"