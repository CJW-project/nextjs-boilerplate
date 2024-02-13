'use client'

import { Row, Col } from "antd";
import { useRecoilValue } from "recoil";
import { countState } from "@/recoil/atom";

export default function Viewer() {

    return (
        <>
            <Row>
                <Col>
                    <h1> Viewer </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p> Count : {useRecoilValue(countState)} </p>
                </Col>
            </Row>
            <hr/>
        </>
    );
}