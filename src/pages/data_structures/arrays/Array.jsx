import React, { useState } from 'react';
import './Array.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit'; // Import the Edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Delete icon
import { doc, updateDoc,collection,addDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import e from "cors";

const Array = () => {
    const updateRef = doc(db, "users", "array");
    const [notestitle, setNotestitle] = useState("");
    const [notes, setNotes] = useState("");
    const [notesyoutube, setNotesyoutube] = useState("");
    const [notesblog, setNotesblog] = useState("");
    const [noteswebsite, setNoteswebsite] = useState("");
    const [open, setOpen] = React.useState(false);
    const [noteslist, setNotesllist] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // New state for edit mode
	const user = auth.currentUser; // Get the current user from Firebase Authentication
    const userNotesRef = collection(db, "users", user.email, "notes/array"); // Reference to the user's notes subcollection

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setNotestitle("");
        setNotes("");
        setNotesblog("");
        setNotesyoutube("");
        setNoteswebsite("");
        setOpen(false);
        setEditIndex(null);
    };

    const handleSubmit = async () => {
		if (notestitle || notes || notesyoutube || notesblog || noteswebsite) {
            const newNote = {
                title: notestitle,
                notes: notes,
                youtube: notesyoutube,
                blog: notesblog,
                website: noteswebsite,
            };

            try {
                await addDoc(userNotesRef, newNote); // Add the note to the user's notes subcollection
                console.log("Note added to Firestore");
            } catch (error) {
                console.error("Error adding note: ", error);
            }

            // ... Reset state and close dialog ...
        }
    };
		const handleEdit = (noteIndex) => {
			setEditIndex(noteIndex);
			const selectedNote = noteslist[noteIndex];
			setNotestitle(selectedNote.title);
			setNotes(selectedNote.notes);
			setNotesyoutube(selectedNote.youtube);
			setNotesblog(selectedNote.blog);
			setNoteswebsite(selectedNote.website);
			setOpen(true);
		};

		const handleSaveEdit = () => {
			const updatedNotesList = [...noteslist];
			updatedNotesList[editIndex] = {
				...updatedNotesList[editIndex],
				title: notestitle,
				notes: notes,
				youtube: notesyoutube,
				blog: notesblog,
				website: noteswebsite,
			};
			setNotesllist(updatedNotesList);
			setEditIndex(null);
			handleCancel();
		};

		const handleDelete = (indexToDelete) => {
			const updatedNotesList = noteslist.filter(
				(_, index) => index !== indexToDelete,
			);
			setNotesllist(updatedNotesList);
		};

		return (
			<div className="main-container">
				<p
					className="main-container-title"
					style={{ color: "white" }}>
					ARRAY
				</p>
				<div className="display-area">
					{/* <p
						className="display-area-title"
						style={{ color: "white" }}>
						Display area
					</p> */}
					<div className="display-area-content">
						<div className="add-btn">
							<Button
								className=""
								sx={{
									borderColor: "none",
									color: "black",
									fontSize: 20,
									padding: -10,
									borderRadius: 50,
									width: 1.5,
									border: "none",
								}}
								variant="outlined"
								onClick={handleClickOpen}>
								+
							</Button>

							<Dialog
								open={open}
								onClose={handleCancel}>
								<DialogTitle>Notes</DialogTitle>
								<DialogContent>
									<DialogContentText sx={{ marginLeft: 10, marginRight: 10 }}>
										Enter the text notes, links, blog, and everything right
										here..
									</DialogContentText>
									<Typography sx={{ marginBottom: 0, marginTop: 2 }}>
										Title
									</Typography>
									<TextField
										autoFocus
										margin="dense"
										id="name"
										type="text"
										fullWidth
										variant="standard"
										sx={{ marginTop: 0 }}
										value={notestitle}
										onChange={(e) => {
											setNotestitle(e.target.value);
										}}
									/>
									<Typography sx={{ marginBottom: 0, marginTop: 2 }}>
										Notes
									</Typography>
									<TextField
										autoFocus
										margin="dense"
										type="text"
										fullWidth
										maxRows={50}
										variant="standard"
										sx={{ marginTop: 0 }}
										value={notes}
										onChange={(e) => {
											setNotes(e.target.value);
										}}
									/>
									<Typography sx={{ marginBottom: 0, marginTop: 2 }}>
										Youtube links
									</Typography>
									<TextField
										autoFocus
										margin="dense"
										id="name"
										type="url"
										fullWidth
										variant="standard"
										sx={{ marginTop: 0 }}
										value={notesyoutube}
										onChange={(e) => {
											setNotesyoutube(e.target.value);
										}}
									/>
									<Typography sx={{ marginBottom: 0, marginTop: 2 }}>
										Blog links
									</Typography>
									<TextField
										autoFocus
										margin="dense"
										id="name"
										type="url"
										fullWidth
										variant="standard"
										sx={{ marginTop: 0 }}
										value={notesblog}
										onChange={(e) => {
											setNotesblog(e.target.value);
										}}
									/>
									<Typography sx={{ marginBottom: 0, marginTop: 2 }}>
										Website links
									</Typography>
									<TextField
										autoFocus
										margin="dense"
										id="name"
										type="url"
										fullWidth
										variant="standard"
										sx={{ marginTop: 0 }}
										value={noteswebsite}
										onChange={(e) => {
											setNoteswebsite(e.target.value);
										}}
									/>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleCancel}>Cancel</Button>
									{editIndex !== null ? (
										<Button onClick={handleSaveEdit}>Save</Button>
									) : (
										<Button onClick={handleSubmit}>Done</Button>
									)}
								</DialogActions>
							</Dialog>
						</div>
						<div className="notes-list">
							{noteslist.map((lists, index) => (
								<div
									key={index}
									className="notes-lists-maines">
									<div
										className={
											lists.title !== "" ? "notes-lists-title" : "hidden"
										}>
										<strong>TITLE:</strong>
										{lists.title}
									</div>
									<div className={lists.notes ? "notes-lists-notes" : "hidden"}>
										<div>
											<strong>NOTES:</strong>
											{editIndex === index ? (
												<TextField
													autoFocus
													margin="dense"
													type="text"
													fullWidth
													maxRows={50}
													variant="standard"
													sx={{ marginTop: 0 }}
													value={notes}
													onChange={(e) => {
														setNotes(e.target.value);
													}}
												/>
											) : (
												<div>
													{lists.notes}
													<DeleteIcon
														style={{ cursor: "pointer", marginLeft: "10px" }}
														onClick={() => handleDelete(index)}
													/>
													<EditIcon
														style={{ cursor: "pointer", marginLeft: "10px" }}
														onClick={() => handleEdit(index)}
													/>
												</div>
											)}
										</div>
										{/* ... Other content sections */}
									</div>
									<div
										className={
											lists.youtube !== "" ? "notes-lists-title" : "hidden"
										}>
										<strong>YOUTUBE:</strong>
										{lists.youtube}
									</div>
									<div
										className={
											lists.blog !== "" ? "notes-lists-title" : "hidden"
										}>
										<strong>BLOG:</strong>
										{lists.blog}
									</div>
									<div
										className={
											lists.website !== "" ? "notes-lists-title" : "hidden"
										}>
										<strong>WEBSITE:</strong>
										{lists.website}
									</div>
									{/* ... Other content sections */}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
};

export default Array;