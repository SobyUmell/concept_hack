// TODO: date; banner; repo pattern & db

package data

import (
	"errors"
	"sync"
)

type Event struct {
	Id               int    `json:"id"`
	Title            string `json:"title"`
	Description      string `json:"description"`
	IsPublic         bool   `json:"isPublic"`
	AllowedUsers     []int  `json:"allowedUsers"`
	IsOffline        bool   `json:"isOffline"`
	OrganizationRate []int  `json:"organizationRate"`
	TaskRate         []int  `json:"taskRate"`
	AtmosphereRate   []int  `json:"atmosphereRate"`
}

type EventBody struct {
	Title        string `json:"title"`
	Description  string `json:"description"`
	IsPublic     bool   `json:"isPublic"`
	AllowedUsers []int  `json:"allowedUsers"`
	IsOffline    bool   `json:"isOffline"`
}

type RateBody struct {
	OrganizationRate int `json:"organizationRate"`
	TaskRate         int `json:"taskRate"`
	AtmosphereRate   int `json:"atmosphereRate"`
}

var managerInstance *EventManager

type EventManager struct {
	Mu     sync.Mutex
	Events []Event
}

func GetEventManagerInstance() *EventManager {
	if managerInstance == nil {
		managerInstance = &EventManager{}
	}
	return managerInstance
}

func (m *EventManager) GetAll() []Event {
	return m.Events
}

func (m *EventManager) GetById(id int) (Event, error) {
	for _, v := range m.Events {
		if v.Id == id {
			return v, nil
		}
	}
	return Event{}, errors.New("not found")
}

func (m *EventManager) Create(b EventBody) Event {
	m.Mu.Lock()
	defer m.Mu.Unlock()

	event := Event{
		Id:           len(m.Events) + 1,
		Title:        b.Title,
		Description:  b.Description,
		IsPublic:     b.IsPublic,
		AllowedUsers: b.AllowedUsers,
		IsOffline:    b.IsOffline,
	}

	m.Events = append(m.Events, event)
	return event
}

func (m *EventManager) Edit(b EventBody, id int) (Event, error) {
	m.Mu.Lock()
	defer m.Mu.Unlock()
	for i, v := range m.Events {
		if v.Id == id {
			m.Events[i].Title = b.Title
			m.Events[i].Description = b.Description
			m.Events[i].IsOffline = b.IsOffline
			m.Events[i].IsPublic = b.IsPublic
		}
	}
	e, err := m.GetById(id)
	if err != nil {
		return Event{}, err
	}

	return e, nil
}

func (m *EventManager) Delete(id int) {
	m.Mu.Lock()
	defer m.Mu.Unlock()

	for i, v := range m.GetAll() {
		if v.Id == id {
			m.Events = append(m.Events[:i], m.Events[i+1:]...)
		}
	}
}

func (m *EventManager) Rate(b RateBody, id int) Event {
	m.Mu.Lock()
	defer m.Mu.Unlock()

	e := Event{}

	for i, v := range m.Events {
		if v.Id == id {
			m.Events[i].OrganizationRate = append(m.Events[i].OrganizationRate, b.OrganizationRate)
			m.Events[i].TaskRate = append(m.Events[i].TaskRate, b.TaskRate)
			m.Events[i].AtmosphereRate = append(m.Events[i].AtmosphereRate, b.AtmosphereRate)
			e = m.Events[i]
		}
	}
	return e
}
