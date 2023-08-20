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

const Array = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="main-container">
			<p className="main-container-title">Arrays</p>
			<div className="area-container">
				<div className="drop-display-area">
					<div className="display-area">
						<p className="display-area-title">Display area</p>
						<div className="display-area-content">
							<div className="add-btn">
								<Button
									variant="outlined"
									onClick={handleClickOpen}>
									ADD
								</Button>
								<Dialog
									open={open}
									onClose={handleClose}>
									<DialogTitle>Subscribe</DialogTitle>
									<DialogContent>
										<DialogContentText>
											To subscribe to this website, please enter your email
											address here. We will send updates occasionally.
										</DialogContentText>
										<TextField
											autoFocus
											margin="dense"
											id="name"
											label="Email Address"
											type="email"
											fullWidth
											variant="standard"
										/>
									</DialogContent>
									<DialogActions>
										<Button onClick={handleClose}>Cancel</Button>
										<Button onClick={handleClose}>Subscribe</Button>
									</DialogActions>
								</Dialog>
							</div>
						</div>
					</div>
					<div className="drop-area">
						<p className="drop-area-title">Drop Area</p>
						<div className="drop-area-content"></div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Array
