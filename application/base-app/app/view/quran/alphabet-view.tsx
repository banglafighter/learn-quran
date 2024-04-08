import {RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import TableHeadCell from "react-rapid-bootstrap/boot/react/table/TableHeadCell";


interface Props extends RapidProps {
}

class State extends RapidComponentState {
}

export default class AlphabetView extends RapidComponent<Props, State> {

    getData() {
        return [
            {final: "ـأ", middle: "ـأ", initial: "أ", isolated: "أ", audio: ""},
            {final: "", middle: "", initial: "", isolated: "", audio: ""},
            {final: "", middle: "", initial: "", isolated: "", audio: ""},
            {final: "", middle: "", initial: "", isolated: "", audio: ""},
            {final: "", middle: "", initial: "", isolated: "", audio: ""},
        ]
    }

    renderUI() {
        const _this = this;
        return (
            <div>
                <Table className={"text-center"} variant={"bordered"}>
                    <TableHead>
                        <TableRow>
                            <th colSpan={3}>Different Form</th>
                            <th rowSpan={2}>Isolated Form</th>
                            <th rowSpan={2}>Play</th>
                        </TableRow>
                        <TableRow>
                            <th>Final</th>
                            <th>Middle</th>
                            <th>Initial</th>
                        </TableRow>
                    </TableHead>
                    <TableBody className={"amiri-quran"}>
                        {this.getData().map((row: any, index: any) => (
                            <TableRow>
                                <TableCell>{row.final}</TableCell>
                                <TableCell>{row.middle}</TableCell>
                                <TableCell>{row.initial}</TableCell>
                                <TableCell>{row.isolated}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}