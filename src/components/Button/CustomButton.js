function CustomButton(props) {
    const { title, disabled } = props;
    return <button className="max-w-xl w-full py-2 px-4 rounded mt-4 border"
        style={{
            background: disabled ? '#ebebeb' : '#074E9f',
            color: disabled ? '#c7c7c7' : 'white',
            fontWeight: '600',
            fontSize: 20
        }}
        disabled={disabled}
        {...props}>
        {title}
    </button>;
}

export default CustomButton;