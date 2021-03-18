import React, { Component } from 'react'
import ReactTimeout from 'react-timeout'
import history from '../history'
import Hamburger from './Hamburger'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';
import { search, shelf, plus } from '../pic'
import Paper from '@material-ui/core/Paper';
import { Success, DG, shelf2 } from '../pic';
import './Modal.css';

import firestore from '../firebase/firestore'
import { addShelf, editShelf, deleteShelf } from '../actions/shelfAction'

const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`

const ButtonDelete = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 200px;
  height: 110px;
  border-radius: 20px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`

const ButtonEdit = styled.button`
  background: #929990;
  border: 2px;
  color: #ffffff;
  width: 200px;
  height: 110px;
  border-radius: 20px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`
const ButtonInputCount = styled.button`
  background: #929990;
  border: 2px;
  color: blue;
  width: 200px;
  height: 110px;
  border-radius: 20px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`

const ButtonYes = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`

const ButtonNo = styled.button`
  background: #929990;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`

const ButtonSave = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 153px;
  height: 61px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`

const ButtonCancel = styled.button`
  background: #929990;
  border: 2px;
  color: #ffffff;
  width: 153px;
  height: 61px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`


class ViewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false,
            modalQues: false,
            modalSure: false,
            modalSuc: false,
            modalEdit: false,
            modalAdd: false,
            user: this.props.userList[this.props.userList.length - 1],
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        };
    }


    ////////////////////////////////////////////////////////
    handleModalQuesClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({
            modalQues: !this.state.modalQues,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };


    handleModalQuesOpen = (item) => {
        this.setState({
            modalQues: !this.state.modalQues,
            shelfSelect: item,
            shelfID: item.shelfID,
            level: item.level,
            width: item.width,
            length: item.length,
            height: item.height,
            maxWeight: item.maxWeight,
        });
    };
    ////////////////////////////////////////////////////////

    handleModalSureClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({
            modalSure: !this.state.modalSure,
            modalQues: !this.state.modalQues,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };

    handleModalSureOpen = () => {
        this.setState({ modalSure: !this.state.modalSure });
    };
    ////////////////////////////////////////////////////////
    handleModalSucClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({
            modalSuc: !this.state.modalSuc,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };

    deleteSuccess = () => {
        console.log('Delete Success')
    }

    handleModalSucOpen = () => {
        /*this.setState({ modalSuc: !this.state.modalSuc });*/
        firestore.deleteShelf(this.state.shelfSelect.id, this.deleteSuccess, this.reject)
        this.props.deleteShelf(this.state.shelfSelect.id)
        this.setState({
            modalSure: false,
            modalQues: false,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };
    ////////////////////////////////////////////////////////

    handleModalEditClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({
            modalEdit: !this.state.modalEdit,
            modalQues: false,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };


    handleModalEditOpen = () => {
        this.setState({ modalEdit: !this.state.modalEdit });
    };
    ////////////////////////////////////////////////////////

    handleModalAddClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({
            modalAdd: !this.state.modalAdd,
            modalQues: false,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    };


    handleModalAddOpen = () => {
        this.setState({ modalAdd: !this.state.modalEdit });
    };


    ///////////////////////////////////////////////////////

    editSuccess = () => {
        console.log('Edit Success')
    }

    onSaveEdit = () => {
        console.log('EDIT')
        const shelf = {
            shelfID: this.state.shelfID,
            level: this.state.level,
            length: this.state.length,
            maxWeight: this.state.maxWeight,
            width: this.state.width,
            height: this.state.height,
            id: this.state.shelfSelect.id,
        }
        firestore.updateShelfByID(shelf, this.editSuccess, this.reject)
        this.props.editShelf(shelf)
        this.setState({
            modalEdit: false,
            modalQues: false,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    }

    addSuccess = (doc) => {
        console.log(doc.id)
        const shelf = {
            shelfID: this.state.shelfID,
            level: this.state.level,
            length: this.state.length,
            maxWeight: this.state.maxWeight,
            width: this.state.width,
            height: this.state.height,
            id: doc.id
        }
        this.props.addShelf(shelf)
        this.setState({
            modalAdd: false,
            shelfSelect: {},
            shelfID: '',
            level: '',
            width: '',
            length: '',
            height: '',
            maxWeight: '',
        });
    }

    reject = (error) => {
        console.log(error)
    }

    onSaveAdd = () => {
        console.log('ADD')
        const shelf = {
            shelfID: this.state.shelfID,
            level: this.state.level,
            length: this.state.length,
            maxWeight: this.state.maxWeight,
            width: this.state.width,
            height: this.state.height,
        }
        console.log(shelf)
        firestore.addShelf(shelf, this.addSuccess, this.reject)
    }



    render() {
        return (
            <div className="bg">
                <Hamburger page='EDIT SHELF' user={this.state.user} />
                <div className="paper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Shelf ID</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ width: '50%' }}>
                    </div>
                    <img
                        style={{ justifyContent: 'flex-end', width: "10%", }}
                        src={search} />

                </div>
                <div style={{ display: 'flex', alignItems: 'center', height: "15%", marginTop: '2%', marginBottom: '2%', }}>
                    <a1 style={{ fontSize: 36, fontWeight: 'bold', marginLeft: "5%" }}>Please select Shelf</a1>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.props.shelfList.map((item) => {
                        return (
                            <Paper className="paperShelf" style={{ borderRadius: "10%"}} onClick={() => { this.handleModalQuesOpen(item) }}>
                                <div style={{ alignItems: 'center', justifyItems: 'center' }}>
                                    <img className="imViewStock" src={shelf} />
                                    <p className="textEditShelf">{item.shelfID}</p>
                                </div>
                            </Paper>
                        );
                    })}
                    <Paper className="paperShelf" style={{ borderRadius: "10%" }}>
                        <div style={{ alignItems: 'center', justifyItems: 'center' }} onClick={this.handleModalAddOpen} >
                            <img className="imViewStock" src={plus} />
                            <p className="textAddEditShelf">ADD SHELF</p>
                        </div>
                    </Paper>
                </div>

                <div hidden={!this.state.modalQues}>
                    <div className="modal-background">
                        <div className="modal-editstock-deloredit">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Font style={{ fontSize: 30, paddingTop: 15 }}>{this.state.shelfSelect.shelfID}</Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 20 }}>
                                <ButtonDelete style={{ fontSize: 30 }} onClick={this.handleModalSureOpen}> Delete </ButtonDelete>
                                <ButtonEdit style={{ fontSize: 30 }} onClick={this.handleModalEditOpen}> Edit </ButtonEdit>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalSure}>
                    <div className="modal-background">
                        <div className="modal-cardforget">
                            <div style={{ paddingTop: 20 }}>
                                <img className="picWarning" src={DG} />
                            </div>
                            <div>
                                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }} >
                                    <p>Are you sure ?</p>
                                </Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 35 }}>
                                <ButtonYes style={{ fontSize: 20 }} onClick={this.handleModalSucOpen}>Yes</ButtonYes>
                                <ButtonNo style={{ fontSize: 20 }} onClick={this.handleModalSureClose}>No</ButtonNo>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalSuc}>
                    <div className="modal-background">
                        <div className="modal-cardforget">
                            <div style={{ paddingTop: 50 }}>
                                <img className="picSuccess" src={Success} />
                            </div>
                            <div>
                                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 45 }} >Success
                                </Font>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalEdit}>
                    <div className="modal-background">
                        <div className="modal-editstock-EditInput ">
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 50 }}>
                                    <div><Font style={{ paddingTop: 45 }}>Shelf ID</Font></div>
                                    <div style={{ paddingTop: 10 }}><input type="type" style={{ width: 449, height: 39, fontSize: 24 }} value={this.state.shelfID} readOnly /></div>
                                    <div><Font style={{ paddingTop: 20 }}>Level</Font></div>
                                    <div style={{ paddingTop: 10 }}><input type="type" style={{ width: 449, height: 39, fontSize: 24 }} value={this.state.level} onChange={txt => this.setState({ level: txt.target.value })} /></div>
                                </div>

                                <img className="picShelfEdit" src={shelf2} style={{ paddingTop: 60 }} />

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: 15, paddingLeft: 50 }}>
                                <Font >Width</Font>
                                <Font style={{ paddingLeft: 160 }}>Length</Font>
                                <Font style={{ paddingLeft: 160 }}>Height</Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: 10, paddingLeft: 50 }}>
                                <div>
                                    <input type="type" style={{ width: 196, height: 39, fontSize: 24 }} value={this.state.width} onChange={txt => this.setState({ width: txt.target.value })} />
                                </div>
                                <div style={{ paddingLeft: 30 }}>
                                    <input type="type" style={{ width: 196, height: 39, fontSize: 24 }} value={this.state.length} onChange={txt => this.setState({ length: txt.target.value })} />
                                </div>
                                <div style={{ paddingLeft: 45 }}>
                                    <input type="type" style={{ width: 196, height: 39, fontSize: 24 }} value={this.state.height} onChange={txt => this.setState({ height: txt.target.value })} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 30, paddingLeft: 50 }}>
                                <Font>Maximum weight</Font>
                                <div style={{ paddingTop: 10 }}>
                                    <input type="type" style={{ width: 230, height: 39, fontSize: 24 }} value={this.state.maxWeight} onChange={txt => this.setState({ maxWeight: txt.target.value })} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 50 }}>
                                <ButtonSave style={{ fontSize: 24 }} onClick={this.onSaveEdit}>Save</ButtonSave>
                                <ButtonCancel style={{ fontSize: 24 }} onClick={this.handleModalEditClose}>Cancel</ButtonCancel>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalAdd}>
                    <div className="modal-background">
                        <div className="modal-editstock-EditInput ">
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 50 }}>
                                    <div><Font style={{ paddingTop: 45 }}>Shelf ID</Font></div>
                                    <div style={{ paddingTop: 10 }}><input type="type" style={{ width: 449, height: 39, fontSize: 24 }} value={this.state.shelfID} onChange={txt => this.setState({ shelfID: txt.target.value })} /></div>
                                    <div><Font style={{ paddingTop: 20 }}>Level</Font></div>
                                    <div style={{ paddingTop: 10 }}><input type="type" style={{ width: 449, height: 39, fontSize: 24 }} value={this.state.level} onChange={txt => this.setState({ level: txt.target.value })} /></div>
                                </div>

                                <img className="picShelfEdit" src={shelf2} style={{ paddingTop: 60 }} />

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: 15, paddingLeft: 50 }}>
                                <Font >Width</Font>
                                <Font style={{ paddingLeft: 160 }}>Length</Font>
                                <Font style={{ paddingLeft: 160 }}>Height</Font>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: 10, paddingLeft: 50 }}>
                                <div>
                                    <input type="type" style={{ width: 196, height: 39, fontSize: 24 }} value={this.state.width} onChange={txt => this.setState({ width: txt.target.value })} />
                                </div>
                                <div style={{ paddingLeft: 30 }}>
                                    <input type="type" style={{ width: 196, height: 39, fontSize: 24 }} value={this.state.length} onChange={txt => this.setState({ length: txt.target.value })} />
                                </div>
                                <div style={{ paddingLeft: 45 }}>
                                    <input type="type" style={{ width: 196, height: 39, fontSize: 24 }} value={this.state.height} onChange={txt => this.setState({ height: txt.target.value })} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 30, paddingLeft: 50 }}>
                                <Font>Maximum weight</Font>
                                <div style={{ paddingTop: 10 }}>
                                    <input type="type" style={{ width: 230, height: 39, fontSize: 24 }} value={this.state.maxWeight} onChange={txt => this.setState({ maxWeight: txt.target.value })} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 50 }}>
                                <ButtonSave style={{ fontSize: 24 }} onClick={this.onSaveAdd}>Save</ButtonSave>
                                <ButtonCancel style={{ fontSize: 24 }} onClick={this.handleModalAddClose}>Cancel</ButtonCancel>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShelf: (shelf) => dispatch(addShelf(shelf)),
        editShelf: (shelf) => dispatch(editShelf(shelf)),
        deleteShelf: (id) => dispatch(deleteShelf(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        shelfList: state.shelfReducer.shelfList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);
