"use client";
import styles from "./page.module.css";
import data from "./data";
import { Card, Avatar } from "@nextui-org/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        {data.map((data, index) => {
          return (
            <Card key={index} css={{ margin: "50px" }}>
              <Card.Header>
                <Avatar
                  squared
                  src={data.user.image_url}
                  css={{ marginRight: "10px" }}
                />{" "}
                {data.user.name} @{data.user.username}
              </Card.Header>
              <Card.Body>{data.message}</Card.Body>
              <Card.Footer css={{ color: "blue" }}>#{data.tags}</Card.Footer>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
