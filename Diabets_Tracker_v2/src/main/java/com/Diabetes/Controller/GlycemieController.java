package com.Diabetes.Controller;


import com.Diabetes.Models.LectureGlycemie;
import com.Diabetes.Service.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/glycimie")
public class GlycemieController {


    @Autowired
    private LectureService Glycemie;

    @GetMapping("/ShowInfo")
    public List<LectureGlycemie> show(){
        return Glycemie.ShowLectures();
    }








}