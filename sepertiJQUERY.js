const $ = selector => {
  const elements = document.querySelectorAll(selector);
  return new $Mylibary(elements, selector);
};

class $Mylibary {
  constructor(elements) {
    this.elements = elements;
  }
  addClass(className) {
    this.elements.forEach(element => element.classList.add(className));
    return this;
  }

  removeClass(className) {
    this.elements.forEach(element => element.classList.remove(className));
    return this;
  }

  hide() {
    this.element.forEach(el => (el.style.display = "none"));
    return this;
  }

  show() {
    this.element.forEach(el => (el.style.display = "block"));
    return this;
  }

  on(btn = "click", fn) {
    this.element[0].forEach(el => {
      el.onclick = fn;
    });
    return this;
  }

  trigger(nameEvent) {
    let events = document.createEvent("Event");
    events.initEvent(nameEvent, true, true);
    this.element[0].dispatchEvent(events);
    return this;
  }

  ajax(obj) {
    httpRequest = new XMLHttpRequest();
    httpRequest.open(obj.type, obj.url);
    let send = httpRequest.send();
    obj.success = send;
    obj.failed = httpRequest.onerror;
    return this;
  }
}
