import React, { Fragment } from "react";
import {
  Button,
  Container,
  Icon,
  List,
  Message,
  Placeholder,
  Header as SegmentHeader,
} from "semantic-ui-react";
import ImageThumb from "../../components/ImageThumb";
import Favorites from "../Favorites";

const ContactListUI = ({
  state: {
    contacts: { loading, error, data },
  },
}) => {
  console.log("data :>> ", data);
  return (
    <Fragment>
      <Container>
        <SegmentHeader>Starred</SegmentHeader>
        <Favorites
          favorites={data.filter((item) => item.is_favorite)}
          loading={loading}
        />
        <SegmentHeader>All</SegmentHeader>

        {loading && (
          <>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </>
        )}
        {!loading && data.length === 0 && (
          <Message content="No Contacts to show" />
        )}

        <List>
          {data.length
            ? data.map((contact) => (
                <List.Item key={contact.id}>
                  <List.Content floated="right">
                    <span>
                      {contact.country_code}
                      {contact.phone_number}
                    </span>
                    <Button color="red" size="tiny">
                      <Icon name="delete" />
                    </Button>
                    <Button>{contact.is_favorite ? "UNSTAR" : "STAR"}</Button>
                  </List.Content>
                  <List.Content className="img-name">
                    <ImageThumb
                      circular
                      firstName={contact.first_name}
                      lastName={contact.last_name}
                      src={contact.contact_picture}
                      style={{ width: 45, height: 45 }}
                    />
                    <span>
                      {contact.first_name} {contact.last_name}
                      {contact.is_favorite && <Icon name="heart" color="red" />}
                    </span>
                  </List.Content>
                </List.Item>
              ))
            : ""}
        </List>
      </Container>
    </Fragment>
  );
};

export default ContactListUI;
