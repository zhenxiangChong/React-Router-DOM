import React, { Component } from 'react'
const detailData =[
    {id:'01',content:'我爱'},
    {id:'02',content:'上班'},
    {id:'03',content:'摸鱼'}
]
export default class Detail extends Component {
    render() {
        const {id,title} = this.props.match.params
        const findResult = detailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
