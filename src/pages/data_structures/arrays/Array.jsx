import React,{ useState } from 'react';
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
import e from "cors";

const Array = () => {
	const [notestitle, setNotestitle] = useState("");
	const [notes, setNotes] = useState("");
	const [notesyoutube, setNotesyoutube] = useState("");
	const [notesblog, setNotesblog] = useState("");
	const [noteswebsite, setNoteswebsite] = useState("");
	const [open, setOpen] = React.useState(false);
	const [noteslist, setNotesllist] = useState([]);

	const lists = {
		title: notestitle,
		notes: notes,
		youtube: notesyoutube,
		blog: notesblog,
		website: noteswebsite,
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleCancel = () => {
		setNotes("");
		setNotesblog("");
		setNotestitle("");
		setNotesyoutube("");
		setNoteswebsite("");
		setOpen(false);
	};

	const handleSubmit = () => {
		setNotesllist([...noteslist, lists]);
		handleCancel();
	};

	return (
		<div className="main-container">
			<p className="main-container-title">ARRAY</p>
			<div className="display-area">
				<p className="display-area-title">Display area</p>
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
									Enter the text notes, links, blog and everything right here..
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
								<Button onClick={handleSubmit}>Done</Button>
							</DialogActions>
						</Dialog>
					</div>
					<div className="notes-list">
						{noteslist.map((lists) => {
							return (
								<div className="notes-lists-maines">
									<div
										className={
											lists.title !== "" ? "notes-lists-title" : "hidden"
										}>
										<strong>TITLE:</strong>
										{lists.title}
									</div>
									<div className={lists.notes ? "notes-lists-notes" : "hidden"}>
										<strong>NOTES:</strong>
										{lists.notes}
									</div>
									<div
										className={
											lists.youtube ? "notes-lists-youtube" : "hidden"
										}>
										<strong>YOUTUBE:</strong>
										{lists.youtube}
									</div>
									<div className={lists.blog ? "notes-lists-blog" : "hidden"}>
										<strong>BLOGS:</strong>
										{lists.blog}
									</div>
									<div
										className={
											lists.website ? "notes-lists-website" : "hidden"
										}>
										<strong>WEBSITES:</strong>
										{lists.website}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};


export default Array
