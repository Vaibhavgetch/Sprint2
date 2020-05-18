package com.cg.moviemgmt.dto;

import java.sql.Time;
import java.util.* ;
public class ShowDetailsDto {

	private int showId;
	private String showName;
	private Time starttime ;
	private Time endtime  ;
	private String movieName ;
	private List<Integer>seatsId;
	
	public int getShowId() {
		return showId;
	}
	public void setShowId(int showId) {
		this.showId = showId;
	}
	public String getShowName() {
		return showName;
	}
	public void setShowName(String showName) {
		this.showName = showName;
	}
	public Time getStarttime() {
		return starttime;
	}
	public void setStarttime(Time starttime) {
		this.starttime = starttime;
	}
	public Time getEndtime() {
		return endtime;
	}
	public void setEndtime(Time endtime) {
		this.endtime = endtime;
	}
	public String getMovieName() {
		return movieName;
	}
	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	public List<Integer> getSeatsId() {
		return seatsId;
	}
	public void setSeatsId(List<Integer> seatsId) {
		this.seatsId = seatsId;
	}

  

}
