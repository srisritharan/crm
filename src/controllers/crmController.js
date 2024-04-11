import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact
    .save()
    .then((saveContact) => {
      res.json(saveContact);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    res.send(err);
  }
};

export const getContactWithID = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};

export const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true }
    );
    if (!updatedContact) {
      return res.json({ message: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (err) {
    res.send(err);
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findOneAndDelete({
      _id: req.params.contactId,
    });

    if (!deletedContact) {
      return res.json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.send(err);
  }
};
