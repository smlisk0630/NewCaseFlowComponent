({
    init : function(component) {
        // Find the component whose aura:id is "flowData"
        let flow = component.find("flowData");
        // In that component, start your flow. Reference the flow's Unique Name/API Name.
    flow.startFlow("New_Case");
    }
})
