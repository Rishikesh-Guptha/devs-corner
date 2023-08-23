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

const Array = () => {
	const [notestitle, setNotestitle] = useState("");
	const [notes, setNotes] = useState("");
	const [notesyoutube, setNotesyoutube] = useState("");
	const [notesblog, setNotesblog] = useState("");
	const [noteswebsite, setNoteswebsite] = useState("");
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
							onClose={handleClose}>
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
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose}>Cancel</Button>
								<Button onClick={handleClose}>Done</Button>
							</DialogActions>
						</Dialog>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Array
