import React from "react";
import { Image, List, Placeholder } from "semantic-ui-react";

const ContactListUI = ({
  state: {
    contacts: { loading, error, data },
  },
}) => {
  return (
    <div>
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
      <List>
        {data.length
          ? data.map((contact) => (
              <List.Item>
                <List.Content floated="right">
                  <span>{contact.phone_number}</span>
                </List.Content>
                <List.Content className="img-name">
                  <Image
                    circular
                    height={55}
                    width={55}
                    src={contact.contact_picture}
                  />
                  <span>
                    {contact.first_name} {contact.lastName}
                  </span>
                </List.Content>
              </List.Item>
            ))
          : ""}
      </List>
    </div>
  );
};

export default ContactListUI;
