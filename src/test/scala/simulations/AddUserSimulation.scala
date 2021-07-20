package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class AddUserSimulation extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  //scenario config
  val scn = scenario("add user")
    .exec(http("post add request")
      .post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type", "application/json")
      .check(status is 201))

    .pause(3)

      .exec(http("get user")
      .get("/api/users/2")
      .check(status is 200))

    .pause(2)

    .exec(http("get all users")
      .get("/api/users?page=2")
      .check(status is 200)
    )

  //execute scenario
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
