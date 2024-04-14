import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import zimAenLam from "../../assets/audio/alphabet/concat/zim-aen-lam.mp3"
import alifFS from "../../assets/audio/fathah/single/alif-fs.mp3"
import baFS from "../../assets/audio/fathah/single/ba-fs.mp3"
import taFS from "../../assets/audio/fathah/single/ta-fs.mp3"
import saFS from "../../assets/audio/fathah/single/sa-fs.mp3"
import jimFS from "../../assets/audio/fathah/single/jim-fs.mp3"
import haFS from "../../assets/audio/fathah/single/ha-fs.mp3"
import khFS from "../../assets/audio/fathah/single/kh-fs.mp3"
import dalFS from "../../assets/audio/fathah/single/dal-fs.mp3"
import jalFS from "../../assets/audio/fathah/single/jal-fs.mp3"
import roFS from "../../assets/audio/fathah/single/ro-fs.mp3"
import jhaFS from "../../assets/audio/fathah/single/jha-fs.mp3"
import sinFS from "../../assets/audio/fathah/single/sin-fs.mp3"
import shinFS from "../../assets/audio/fathah/single/shin-fs.mp3"
import sodFS from "../../assets/audio/fathah/single/sod-fs.mp3"
import dodFS from "../../assets/audio/fathah/single/dod-fs.mp3"
import toFS from "../../assets/audio/fathah/single/to-fs.mp3"
import joFS from "../../assets/audio/fathah/single/jo-fs.mp3"
import aenFS from "../../assets/audio/fathah/single/aen-fs.mp3"
import gaenFS from "../../assets/audio/fathah/single/gaen-fs.mp3"
import faFS from "../../assets/audio/fathah/single/fa-fs.mp3"
import kofFS from "../../assets/audio/fathah/single/kof-fs.mp3"
import kafFS from "../../assets/audio/fathah/single/kaf-fs.mp3"
import lamFS from "../../assets/audio/fathah/single/lam-fs.mp3"
import mimFS from "../../assets/audio/fathah/single/mim-fs.mp3"
import nunFS from "../../assets/audio/fathah/single/nun-fs.mp3"
import owaoFS from "../../assets/audio/fathah/single/owao-fs.mp3"
import haaFS from "../../assets/audio/fathah/single/haa-fs.mp3"
import hamjaFS from "../../assets/audio/fathah/single/hamja-fs.mp3"
import eaFS from "../../assets/audio/fathah/single/ea-fs.mp3"

import alifKS from "../../assets/audio/kasrah/single/alif-ks.mp3"
import baKS from "../../assets/audio/kasrah/single/ba-ks.mp3"
import taKS from "../../assets/audio/kasrah/single/ta-ks.mp3"
import saKS from "../../assets/audio/kasrah/single/sa-ks.mp3"
import jimKS from "../../assets/audio/kasrah/single/jim-ks.mp3"
import haKS from "../../assets/audio/kasrah/single/ha-ks.mp3"
import khKS from "../../assets/audio/kasrah/single/kh-ks.mp3"
import dalKS from "../../assets/audio/kasrah/single/dal-ks.mp3"
import jalKS from "../../assets/audio/kasrah/single/jal-ks.mp3"
import roKS from "../../assets/audio/kasrah/single/ro-ks.mp3"
import jhaKS from "../../assets/audio/kasrah/single/jha-ks.mp3"
import sinKS from "../../assets/audio/kasrah/single/sin-ks.mp3"
import shinKS from "../../assets/audio/kasrah/single/shin-ks.mp3"
import sodKS from "../../assets/audio/kasrah/single/sod-ks.mp3"
import dodKS from "../../assets/audio/kasrah/single/dod-ks.mp3"
import toKS from "../../assets/audio/kasrah/single/to-ks.mp3"
import joKS from "../../assets/audio/kasrah/single/jo-ks.mp3"
import aenKS from "../../assets/audio/kasrah/single/aen-ks.mp3"
import gaenKS from "../../assets/audio/kasrah/single/gaen-ks.mp3"
import faKS from "../../assets/audio/kasrah/single/fa-ks.mp3"
import kofKS from "../../assets/audio/kasrah/single/kof-ks.mp3"
import kafKS from "../../assets/audio/kasrah/single/kaf-ks.mp3"
import lamKS from "../../assets/audio/kasrah/single/lam-ks.mp3"
import mimKS from "../../assets/audio/kasrah/single/mim-ks.mp3"
import nunKS from "../../assets/audio/kasrah/single/nun-ks.mp3"
import owaoKS from "../../assets/audio/kasrah/single/owao-ks.mp3"
import haaKS from "../../assets/audio/kasrah/single/haa-ks.mp3"
import hamjaKS from "../../assets/audio/kasrah/single/hamja-ks.mp3"
import eaKS from "../../assets/audio/kasrah/single/ea-ks.mp3"

import alifDS from "../../assets/audio/dhammah/single/alif-ds.mp3"
import baDS from "../../assets/audio/dhammah/single/ba-ds.mp3"
import taDS from "../../assets/audio/dhammah/single/ta-ds.mp3"
import saDS from "../../assets/audio/dhammah/single/sa-ds.mp3"
import jimDS from "../../assets/audio/dhammah/single/jim-ds.mp3"
import haDS from "../../assets/audio/dhammah/single/ha-ds.mp3"
import khDS from "../../assets/audio/dhammah/single/kh-ds.mp3"
import dalDS from "../../assets/audio/dhammah/single/dal-ds.mp3"
import jalDS from "../../assets/audio/dhammah/single/jal-ds.mp3"
import roDS from "../../assets/audio/dhammah/single/ro-ds.mp3"
import jhaDS from "../../assets/audio/dhammah/single/jha-ds.mp3"
import sinDS from "../../assets/audio/dhammah/single/sin-ds.mp3"
import shinDS from "../../assets/audio/dhammah/single/shin-ds.mp3"
import sodDS from "../../assets/audio/dhammah/single/sod-ds.mp3"
import dodDS from "../../assets/audio/dhammah/single/dod-ds.mp3"
import toDS from "../../assets/audio/dhammah/single/to-ds.mp3"
import joDS from "../../assets/audio/dhammah/single/jo-ds.mp3"
import aenDS from "../../assets/audio/dhammah/single/aen-ds.mp3"
import gaenDS from "../../assets/audio/dhammah/single/gaen-ds.mp3"
import faDS from "../../assets/audio/dhammah/single/fa-ds.mp3"
import kofDS from "../../assets/audio/dhammah/single/kof-ds.mp3"
import kafDS from "../../assets/audio/dhammah/single/kaf-ds.mp3"
import lamDS from "../../assets/audio/dhammah/single/lam-ds.mp3"
import mimDS from "../../assets/audio/dhammah/single/mim-ds.mp3"
import nunDS from "../../assets/audio/dhammah/single/nun-ds.mp3"
import owaoDS from "../../assets/audio/dhammah/single/owao-ds.mp3"
import haaDS from "../../assets/audio/dhammah/single/haa-ds.mp3"
import hamjaDS from "../../assets/audio/dhammah/single/hamja-ds.mp3"
import eaDS from "../../assets/audio/dhammah/single/ea-ds.mp3"

import alifFD from "../../assets/audio/fathah/double/alif-fd.mp3"
import baFD from "../../assets/audio/fathah/double/ba-fd.mp3"
import taFD from "../../assets/audio/fathah/double/ta-fd.mp3"
import saFD from "../../assets/audio/fathah/double/sa-fd.mp3"
import jimFD from "../../assets/audio/fathah/double/jim-fd.mp3"
import haFD from "../../assets/audio/fathah/double/ha-fd.mp3"
import khFD from "../../assets/audio/fathah/double/kh-fd.mp3"
import dalFD from "../../assets/audio/fathah/double/dal-fd.mp3"
import jalFD from "../../assets/audio/fathah/double/jal-fd.mp3"
import roFD from "../../assets/audio/fathah/double/ro-fd.mp3"
import jhaFD from "../../assets/audio/fathah/double/jha-fd.mp3"
import sinFD from "../../assets/audio/fathah/double/sin-fd.mp3"
import shinFD from "../../assets/audio/fathah/double/shin-fd.mp3"
import sodFD from "../../assets/audio/fathah/double/sod-fd.mp3"
import dodFD from "../../assets/audio/fathah/double/dod-fd.mp3"
import toFD from "../../assets/audio/fathah/double/to-fd.mp3"
import joFD from "../../assets/audio/fathah/double/jo-fd.mp3"
import aenFD from "../../assets/audio/fathah/double/aen-fd.mp3"
import gaenFD from "../../assets/audio/fathah/double/gaen-fd.mp3"
import faFD from "../../assets/audio/fathah/double/fa-fd.mp3"
import kofFD from "../../assets/audio/fathah/double/kof-fd.mp3"
import kafFD from "../../assets/audio/fathah/double/kaf-fd.mp3"
import lamFD from "../../assets/audio/fathah/double/lam-fd.mp3"
import mimFD from "../../assets/audio/fathah/double/mim-fd.mp3"
import nunFD from "../../assets/audio/fathah/double/nun-fd.mp3"
import owaoFD from "../../assets/audio/fathah/double/owao-fd.mp3"
import haaFD from "../../assets/audio/fathah/double/haa-fd.mp3"
import hamjaFD from "../../assets/audio/fathah/double/hamja-fd.mp3"
import eaFD from "../../assets/audio/fathah/double/ea-fd.mp3"

import alifKD from "../../assets/audio/kasrah/double/alif-kd.mp3"
import baKD from "../../assets/audio/kasrah/double/ba-kd.mp3"
import taKD from "../../assets/audio/kasrah/double/ta-kd.mp3"
import saKD from "../../assets/audio/kasrah/double/sa-kd.mp3"
import jimKD from "../../assets/audio/kasrah/double/jim-kd.mp3"
import haKD from "../../assets/audio/kasrah/double/ha-kd.mp3"
import khKD from "../../assets/audio/kasrah/double/kh-kd.mp3"
import dalKD from "../../assets/audio/kasrah/double/dal-kd.mp3"
import jalKD from "../../assets/audio/kasrah/double/jal-kd.mp3"
import roKD from "../../assets/audio/kasrah/double/ro-kd.mp3"
import jhaKD from "../../assets/audio/kasrah/double/jha-kd.mp3"
import sinKD from "../../assets/audio/kasrah/double/sin-kd.mp3"
import shinKD from "../../assets/audio/kasrah/double/shin-kd.mp3"
import sodKD from "../../assets/audio/kasrah/double/sod-kd.mp3"
import dodKD from "../../assets/audio/kasrah/double/dod-kd.mp3"
import toKD from "../../assets/audio/kasrah/double/to-kd.mp3"
import joKD from "../../assets/audio/kasrah/double/jo-kd.mp3"
import aenKD from "../../assets/audio/kasrah/double/aen-kd.mp3"
import gaenKD from "../../assets/audio/kasrah/double/gaen-kd.mp3"
import faKD from "../../assets/audio/kasrah/double/fa-kd.mp3"
import kofKD from "../../assets/audio/kasrah/double/kof-kd.mp3"
import kafKD from "../../assets/audio/kasrah/double/kaf-kd.mp3"
import lamKD from "../../assets/audio/kasrah/double/lam-kd.mp3"
import mimKD from "../../assets/audio/kasrah/double/mim-kd.mp3"
import nunKD from "../../assets/audio/kasrah/double/nun-kd.mp3"
import owaoKD from "../../assets/audio/kasrah/double/owao-kd.mp3"
import haaKD from "../../assets/audio/kasrah/double/haa-kd.mp3"
import hamjaKD from "../../assets/audio/kasrah/double/hamja-kd.mp3"
import eaKD from "../../assets/audio/kasrah/double/ea-kd.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class JoborJerPeshView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}
    randomData: any
    currentlyPlayingIndex: any = 0
    tableItemPerRow: any = 6
    totalDataLength: any = 0

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.generateRandomTableRow()
    }

    getData() {
        return [
            {letter: "اٌ", audio: zimAenLam},
            {letter: "اٍ", audio: alifKD},
            {letter: "اً", audio: alifFD},
            {letter: "اُ", audio: alifDS},
            {letter: "اِ", audio: alifKS},
            {letter: "اَ", audio: alifFS},

            {letter: "بٌ", audio: zimAenLam},
            {letter: "بٍ", audio: baKD},
            {letter: "بً", audio: baFD},
            {letter: "بُ", audio: baDS},
            {letter: "بِ", audio: baKS},
            {letter: "بَ", audio: baFS},

            {letter: "تٌ", audio: zimAenLam},
            {letter: "تٍ", audio: taKD},
            {letter: "تً", audio: taFD},
            {letter: "تُ", audio: taDS},
            {letter: "تِ", audio: taKS},
            {letter: "تَ", audio: taFS},

            {letter: "ثٌ", audio: zimAenLam},
            {letter: "ثٍ", audio: saKD},
            {letter: "ثً", audio: saFD},
            {letter: "ثُ", audio: saDS},
            {letter: "ثِ", audio: saKS},
            {letter: "ثَ", audio: saFS},

            {letter: "جٌ", audio: zimAenLam},
            {letter: "جٍ", audio: jimKD},
            {letter: "جً", audio: jimFD},
            {letter: "جُ", audio: jimDS},
            {letter: "جِ", audio: jimKS},
            {letter: "جَ", audio: jimFS},

            {letter: "حٌ", audio: zimAenLam},
            {letter: "حٍ", audio: haKD},
            {letter: "حً", audio: haFD},
            {letter: "حُ", audio: haDS},
            {letter: "حِ", audio: haKS},
            {letter: "حَ", audio: haFS},

            {letter: "خٌ", audio: zimAenLam},
            {letter: "خٍ", audio: khKD},
            {letter: "خً", audio: khFD},
            {letter: "خُ", audio: khDS},
            {letter: "خِ", audio: khKS},
            {letter: "خَ", audio: khFS},

            {letter: "دٌ", audio: zimAenLam},
            {letter: "دٍ", audio: dalKD},
            {letter: "دً", audio: dalFD},
            {letter: "دُ", audio: dalDS},
            {letter: "دِ", audio: dalKS},
            {letter: "دَ", audio: dalFS},

            {letter: "ذٌ", audio: zimAenLam},
            {letter: "ذٍ", audio: jalKD},
            {letter: "ذً", audio: jalFD},
            {letter: "ذُ", audio: jalDS},
            {letter: "ذِ", audio: jalKS},
            {letter: "ذَ", audio: jalFS},

            {letter: "رٌ", audio: zimAenLam},
            {letter: "رٍ", audio: roKD},
            {letter: "رً", audio: roFD},
            {letter: "رُ", audio: roDS},
            {letter: "رِ", audio: roKS},
            {letter: "رَ", audio: roFS},

            {letter: "زٌ", audio: zimAenLam},
            {letter: "زٍ", audio: jhaKD},
            {letter: "زً", audio: jhaFD},
            {letter: "زُ", audio: jhaDS},
            {letter: "زِ", audio: jhaKS},
            {letter: "زَ", audio: jhaFS},

            {letter: "سٌ", audio: zimAenLam},
            {letter: "سٍ", audio: sinKD},
            {letter: "سً", audio: sinFD},
            {letter: "سُ", audio: sinDS},
            {letter: "سِ", audio: sinKS},
            {letter: "سَ", audio: sinFS},

            {letter: "شٌ", audio: zimAenLam},
            {letter: "شٍ", audio: shinKD},
            {letter: "شً", audio: shinFD},
            {letter: "شُ", audio: shinDS},
            {letter: "شِ", audio: shinKS},
            {letter: "شَ", audio: shinFS},

            {letter: "صٌ", audio: zimAenLam},
            {letter: "صٍ", audio: sodKD},
            {letter: "صً", audio: sodFD},
            {letter: "صُ", audio: sodDS},
            {letter: "صِ", audio: sodKS},
            {letter: "صَ", audio: sodFS},

            {letter: "ضٌ", audio: zimAenLam},
            {letter: "ضٍ", audio: dodKD},
            {letter: "ضً", audio: dodFD},
            {letter: "ضُ", audio: dodDS},
            {letter: "ضِ", audio: dodKS},
            {letter: "ضَ", audio: dodFS},

            {letter: "طٌ", audio: zimAenLam},
            {letter: "طٍ", audio: toKD},
            {letter: "طً", audio: toFD},
            {letter: "طُ", audio: toDS},
            {letter: "طِ", audio: toKS},
            {letter: "طَ", audio: toFS},

            {letter: "ظٌ", audio: zimAenLam},
            {letter: "ظٍ", audio: joKD},
            {letter: "ظً", audio: joFD},
            {letter: "ظُ", audio: joDS},
            {letter: "ظِ", audio: joKS},
            {letter: "ظَ", audio: joFS},

            {letter: "عٌ", audio: zimAenLam},
            {letter: "عٍ", audio: aenKD},
            {letter: "عً", audio: aenFD},
            {letter: "عُ", audio: aenDS},
            {letter: "عِ", audio: aenKS},
            {letter: "عَ", audio: aenFS},

            {letter: "غٌ", audio: zimAenLam},
            {letter: "غٍ", audio: gaenKD},
            {letter: "غً", audio: gaenFD},
            {letter: "غُ", audio: gaenDS},
            {letter: "غِ", audio: gaenKS},
            {letter: "غَ", audio: gaenFS},

            {letter: "فٌ", audio: zimAenLam},
            {letter: "فٍ", audio: faKD},
            {letter: "فً", audio: faFD},
            {letter: "فُ", audio: faDS},
            {letter: "فِ", audio: faKS},
            {letter: "فَ", audio: faFS},

            {letter: "قٌ", audio: zimAenLam},
            {letter: "قٍ", audio: kofKD},
            {letter: "قً", audio: kofFD},
            {letter: "قُ", audio: kofDS},
            {letter: "قِ", audio: kofKS},
            {letter: "قَ", audio: kofFS},

            {letter: "كٌ", audio: zimAenLam},
            {letter: "كٍ", audio: kafKD},
            {letter: "كً", audio: kafFD},
            {letter: "كُ", audio: kafDS},
            {letter: "كِ", audio: kafKS},
            {letter: "كَ", audio: kafFS},

            {letter: "لٌ", audio: zimAenLam},
            {letter: "لٍ", audio: lamKD},
            {letter: "لً", audio: lamFD},
            {letter: "لُ", audio: lamDS},
            {letter: "لِ", audio: lamKS},
            {letter: "لَ", audio: lamFS},

            {letter: "مٌ", audio: zimAenLam},
            {letter: "مٍ", audio: mimKD},
            {letter: "مً", audio: mimFD},
            {letter: "مُ", audio: mimDS},
            {letter: "مِ", audio: mimKS},
            {letter: "مَ", audio: mimFS},

            {letter: "نٌ", audio: zimAenLam},
            {letter: "نٍ", audio: nunKD},
            {letter: "نً", audio: nunFD},
            {letter: "نُ", audio: nunDS},
            {letter: "نِ", audio: nunKS},
            {letter: "نَ", audio: nunFS},

            {letter: "وٌ", audio: zimAenLam},
            {letter: "وٍ", audio: owaoKD},
            {letter: "وً", audio: owaoFD},
            {letter: "وُ", audio: owaoDS},
            {letter: "وِ", audio: owaoKS},
            {letter: "وَ", audio: owaoFS},

            {letter: "هٌ", audio: zimAenLam},
            {letter: "هٍ", audio: haaKD},
            {letter: "هً", audio: haaFD},
            {letter: "هُ", audio: haaDS},
            {letter: "هِ", audio: haaKS},
            {letter: "هَ", audio: haaFS},

            {letter: "ءٌ", audio: zimAenLam},
            {letter: "ءٍ", audio: hamjaKD},
            {letter: "ءً", audio: hamjaFD},
            {letter: "ءُ", audio: hamjaDS},
            {letter: "ءِ", audio: hamjaKS},
            {letter: "ءَ", audio: hamjaFS},

            {letter: "يٌ", audio: zimAenLam},
            {letter: "يٍ", audio: eaKD},
            {letter: "يً", audio: eaFD},
            {letter: "يُ", audio: eaDS},
            {letter: "يِ", audio: eaKS},
            {letter: "يَ", audio: eaFS},

        ]
    }

    playAudio(index: any, startText?: any, stopText?: any) {
        const _this = this
        let data: any = this.randomData
        if (!data) {
            return
        }
        let itemPerRowWithZeroCount: any = _this.tableItemPerRow - 1
        if (index < (this.currentlyPlayingIndex - itemPerRowWithZeroCount) || index === undefined) {
            if (this.currentlyPlayingIndex >= this.totalDataLength) {
                _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
                return;
            }
            index = this.currentlyPlayingIndex + itemPerRowWithZeroCount
            if (index >= this.totalDataLength) {
                index = this.totalDataLength - 1
            }
        }
        this.currentlyPlayingIndex++
        _this.setState({selectedRow: index})
        if (data.length > index && this.state.isStarted) {
            _this.setState({payAllButtonLabel: stopText})
            if (data[index].audio !== "" && data[index].audio) {
                let audio: any = new Audio(data[index].audio)
                audio.onended = () => {
                    _this.playAudio(index - 1, startText, stopText)
                }
                audio.play()
            } else {
                _this.playAudio(index - 1, startText, stopText)
            }
        } else {
            _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
        }
    }

    generateRandomTableRow() {
        const _this = this;
        // _this.randomData = _this.getData().sort(() => Math.random() - 0.5)
        _this.randomData = _this.getData()
        this.notifyComponentChange()
    }

    getTableRowHTML(){
        const _this = this;
        if (!_this.randomData) {
            return
        }
        let rowHTML: any = []
        let data: any = _this.randomData
        let itemPerRow: any = _this.tableItemPerRow
        let totalData: any = _this.totalDataLength = data.length
        let numberOfRow: any = Math.ceil(totalData / itemPerRow)
        for (let row = 0; row <= numberOfRow; row++) {
            let maxRunRow: any = (row * itemPerRow) + itemPerRow
            if (maxRunRow > totalData) {
                maxRunRow = totalData
            }
            let cellHTML: any = []
            let itemIndex: any = row * itemPerRow
            for (; itemIndex < maxRunRow; itemIndex++) {
                let dataItem: any = data[itemIndex]
                cellHTML.push(
                    <TableCell key={itemIndex} className={_this.state.selectedRow === itemIndex ? "table-secondary text-center" : "text-center"}>
                        {dataItem.letter}
                        <Button
                            onClick={() => {
                                let audio: any = new Audio(dataItem.audio)
                                audio.play()
                            }}
                            viewSize={"small"}
                            className={"ms-3 text-success"}
                            variant={"light"}>
                            <i className="fa-solid fa-play"></i>
                        </Button>
                    </TableCell>
                )
            }
            rowHTML.push(
                <TableRow key={itemIndex}>{cellHTML}</TableRow>
            )
        }
        return rowHTML;
    }

    renderUI() {
        const _this = this;
        return (
            <div>
                <div className={"top-action mb-2 m-2 d-flex flex-row-reverse"}>
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.state.isStarted = !this.state.isStarted
                                this.currentlyPlayingIndex = 0
                                this.playAudio( undefined, "Play All", "Stop")
                            }}
                        >
                            {this.state.payAllButtonLabel}
                        </button>
                    </div>
                </div>
                <Table className={"text-center"} variant={"bordered"}>
                    <TableBody className={"al-qalam-quran-majeed2"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}