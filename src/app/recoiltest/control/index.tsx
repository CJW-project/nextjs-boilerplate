'use client'

import { Row, Col, Button, Input } from "antd";
import { countState } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export default function Control() {
    const [count, setCount] = useRecoilState(countState);

    return (
        <>
            <Row>
                <Col>
                    <p> count controller </p>
                </Col>
                <Col>
                    <Button onClick={() => setCount(count + 1)}>+</Button>
                    <Button onClick={() => setCount(count - 1)}>-</Button>
                </Col>
            </Row>
        </>
    );
}