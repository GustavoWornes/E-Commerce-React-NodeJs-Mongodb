import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal } from 'antd';
import { api } from '../../../Services/services'
import {
    NavLink
} from "react-router-dom";
import { utils } from "../../../utils";
import { deleteProduct } from "../../../Services/services"
import './style.css'
const Listaprodutos = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        api.get(`/adm`).then(({ data }) => {
            setProducts(data)

        });
    }, [])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };



    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Row className="RowList">
                <Col span={6} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>
                    <h2>ID</h2>
                </Col>
                <Col span={4} justify="center" xs={{ order: 2 }} sm={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2 }}>
                    <h2>Nome</h2>
                </Col>

            </Row>
            {Object.keys(products).map(key => {
                const handleOk = () => {
                    setIsModalVisible(false);
                    utils.deleteProductMessage()
                    deleteProduct(products[key]._id)
                };
                return (
                    <Row key={key} className="RowListItem">
                        <Col className="ColItem" span={6} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>
                            <p>{products[key]._id}</p>
                        </Col>
                        <Col className="ColItem" span={4} xs={{ order: 2 }} sm={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2 }}>
                            <p>{products[key].name}</p>
                        </Col>
                        <Col className="ColItem" span={3} xs={{ order: 3 }} sm={{ order: 3 }} md={{ order: 3 }} lg={{ order: 3 }}>
                            <NavLink to={`/adm/descricao/${products[key]._id}`}><Button type="primary">Descrição</Button></NavLink>
                        </Col>
                        <Col className="ColItem" span={3} xs={{ order: 4 }} sm={{ order: 4 }} md={{ order: 4 }} lg={{ order: 4 }}>
                            <Button type="primary" onClick={showModal}>
                                Delete
                            </Button>
                            <Modal title="Deletar Produto" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <h3>Certeza que deseja deletar o produto: {products[key].name}</h3>
                            </Modal>


                        </Col>

                    </Row>
                )
            })}

        </>

    )
}

export default Listaprodutos