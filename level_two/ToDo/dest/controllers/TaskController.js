"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_task = exports.get_task = exports.add_task = exports.create_task = exports.all_tasks = void 0;
const TaskModel_1 = __importDefault(require("../models/TaskModel"));
const express_validator_1 = require("express-validator");
const mongodb_1 = require("mongodb");
const all_tasks = (req, res) => {
    TaskModel_1.default.find()
        .then((tasks) => {
        if (!tasks) {
            res.status(500).json({ err: "there is a problem for finding the documents" });
        }
        else {
            res.render('index', { data: tasks });
        }
    })
        .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving tasks");
    });
};
exports.all_tasks = all_tasks;
const create_task = (req, res) => {
    res.render('create');
};
exports.create_task = create_task;
const add_task = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    let task = new TaskModel_1.default(req.body);
    task.save()
        .then((result) => {
        if (!result) {
            res.status(500).json({ err: "there is a problem for saving the document" });
        }
        else {
            res.redirect('/task/');
        }
    })
        .catch((err) => {
        console.error(err);
        res.status(500).send("Error adding task");
    });
};
exports.add_task = add_task;
const get_task = (req, res) => {
    let id = req.params.id;
    if (mongodb_1.ObjectId.isValid(id)) {
        TaskModel_1.default
            .findById(id)
            .then((task) => {
            if (!task) {
                res.status(400).json({ err: "Task not found" });
            }
            else {
                res.render('details', { task });
            }
        })
            .catch(err => console.log(err));
    }
    else {
        res.status(400).json({ err: "not valid id" });
    }
};
exports.get_task = get_task;
const delete_task = (req, res) => {
    (req, res) => {
        let id = req.params.id;
        if (mongodb_1.ObjectId.isValid(id)) {
            TaskModel_1.default
                .findByIdAndDelete(id)
                .then((result) => {
                if (!result) {
                    res.status(400).json({ err: "Task not found" });
                }
                else {
                    res.json({ redirect: '/' });
                }
            })
                .catch(err => console.log(err));
        }
        else {
            res.status(400).json({ err: "not valid id" });
        }
    };
};
exports.delete_task = delete_task;
