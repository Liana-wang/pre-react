import React, { useState, useEffect } from 'react'

export default function FunctionComponent() {
    const [count, setCount] = useState(0)

    // 相当于compoenentDidMount,componentDidUpdate,componentWillUnMount
    useEffect(() => {
        console.log('count effect')
        document.title = `点击了${count}次`
    }, [count])

    return (
        <div>
            <h3>FunctionComponent</h3>
            <p>{useClock().toLocaleTimeString()}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <hr />
        </div>
    )
}

// 自定义hook，必须以use开头，函数内部可以调用其他的hook
function useClock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        // 只要改变就会执行这个useEffect，因此需要添加依赖项
        console.log('date useEffect')
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // 清除定时器
        return () => clearInterval(timer)


        // 此处没有依赖项，则填写空数组
    }, [])

    return date
}

// ! hook只能在最外层使用，不能在循环，条件判断或子函数中使用
// ! hook只能在React函数组件中使用，不能在其他js函数中使用，（可以在自定义hook中使用）