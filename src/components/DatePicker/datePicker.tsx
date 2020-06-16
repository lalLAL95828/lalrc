import React,{FC} from "react"
import classNames from "classnames"


export interface DatePickerProps {

}

export const DatePicker:FC<DatePickerProps> = (props)=>{
    var tableClassNames = classNames("l-datePicker-table")


    return (
        <>
            <div>
                <div></div>
                <div>
                    <div>
                        <div></div>
                        <div>
                            <table className={tableClassNames}>
                                <thead>
                                    <tr>
                                        <th>日</th>
                                        <th>一</th>
                                        <th>二</th>
                                        <th>三</th>
                                        <th>四</th>
                                        <th>五</th>
                                        <th>六</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatePicker


