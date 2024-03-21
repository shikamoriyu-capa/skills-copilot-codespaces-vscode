function skillsMember()
{
    var member = new Object();
    member.name = "John";
    member.age = 25;
    member.skills = ["C++", "Java", "Python"];
    member.showSkills = function() {
        for (var i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i]);
        }
    }
    return member;
}
