package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class LoopRequest extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")
  //scenario config
  val scn = scenario("user request scenario")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getSingleUserRequest())
    .pause(2)
    .exec(addUser())

  def getAllUsersRequest(): ChainBuilder = {
    repeat(2) {
      exec(http("get all users request")
        .get("/api/users?page=2")
        .check(status is 200)
      )
    }
  }

  def getSingleUserRequest(): ChainBuilder = {
    repeat(2) {
      exec(http("get single user request")
        .get("/api/users/2")
        .check(status is 200)
      )
    }
  }

  def addUser(): ChainBuilder = {
    repeat(2) {
      exec(http("add user request")
        .post("/api/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .check(status is 201)
      )
    }
  }

  //execute scenario
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
